/**
 * Buy Solana Override for Solaxy Angular App
 * This script overrides the "BUY WITH SOLANA" link to show wallet selection modal
 */

class BuySolanaOverride {
    constructor() {
        this.isInitialized = false;
        this.originalElement = null;
        this.walletSelected = false;
        this.selectedWallet = null;
    }

    init() {
        if (this.isInitialized) return;

        // Wait for DOM to be ready and Angular to load
        this.waitForElementAndOverride();
        this.isInitialized = true;
    }

    waitForElementAndOverride() {
        const checkForElement = () => {
            const solanaButtons = document.querySelectorAll('.buy-with-solana');

            if (solanaButtons.length > 0) {
                solanaButtons.forEach(button => this.overrideSolanaButton(button));
            } else {
                // Keep checking every 100ms until elements are found
                setTimeout(checkForElement, 100);
            }
        };

        checkForElement();

        // Also set up a mutation observer to catch dynamically added elements
        this.setupMutationObserver();
    }

    setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check if the added node is a solana button or contains one
                            const solanaButtons = node.classList?.contains('buy-with-solana')
                                ? [node]
                                : node.querySelectorAll ? node.querySelectorAll('.buy-with-solana') : [];

                            solanaButtons.forEach(button => this.overrideSolanaButton(button));
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    overrideSolanaButton(element) {
        // Skip if already overridden
        if (element.dataset.overridden === 'true') return;

        // Mark as overridden to prevent duplicate processing
        element.dataset.overridden = 'true';

        // Store original element
        this.originalElement = element;

        // Convert link to button behavior
        element.removeAttribute('href');
        element.removeAttribute('target');
        element.style.cursor = 'pointer';
        element.style.textDecoration = 'none';

        // Add click event listener to show wallet selection modal
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showWalletSelectionModal();
        });

        // Always set text to 'CONNECT WALLET'
        this.updateButtonText(element, 'CONNECT WALLET');
    }

    updateButtonText(element, text) {
        // Clear ALL content from the button first (removes text AND images)
        element.innerHTML = '';

        // Create a new span for the text
        const newTextSpan = document.createElement('span');
        newTextSpan.textContent = text;
        newTextSpan.className = 'btn-text';
        newTextSpan.style.color = '#ffffff';
        newTextSpan.style.fontWeight = '600';

        // Only add the text span (no image)
        element.appendChild(newTextSpan);
    }

    showWalletSelectionModal() {
        // Create and show wallet selection modal
        this.createWalletSelectionModal();
    }

    createWalletSelectionModal() {
        // Remove existing modal if any
        const existingModal = document.querySelector('.solana-wallet-modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'solana-wallet-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="solana-wallet-modal-content">
                <button class="solana-wallet-modal-close" onclick="buySolanaOverride.hideWalletSelectionModal()">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>

                <div class="solana-wallet-modal-header">
                    <h2>SELECT WALLET</h2>
                    <p>Choose your preferred wallet to connect</p>
                </div>

                <div class="solana-wallet-options">
                    <button class="solana-wallet-option" onclick="buySolanaOverride.selectWallet('walletBW')">
                        <img src="assets/images/png/bw.png" alt="Best Wallet" />
                        <span>Best Wallet</span>
                    </button>


                    <button class="solana-wallet-option" onclick="buySolanaOverride.selectWallet('metamask')">
                        <img src="assets/images/svg-icons/metamask.svg" alt="Metamask" />
                        <span>Metamask</span>
                    </button>

                    <button class="solana-wallet-option" onclick="buySolanaOverride.selectWallet('coinbase')">
                        <img src="assets/images/svg-icons/coinbase.svg" alt="Coinbase Wallet" />
                        <span>Coinbase Wallet</span>
                    </button>

                    <button class="solana-wallet-option" onclick="buySolanaOverride.selectWallet('wallet')">
                        <img src="assets/images/svg-icons/wallet.svg" alt="Wallet Connect" />
                        <span>Wallet Connect</span>
                    </button>

                </div>
            </div>
        `;

        // Add styles for the modal
        this.addModalStyles();

        // Add to DOM
        document.body.appendChild(modalOverlay);
        document.body.style.overflow = 'hidden';

        // Add event listeners for wallet selection buttons
        const walletOptions = modalOverlay.querySelectorAll('.solana-wallet-option');
        walletOptions.forEach(button => {
            button.addEventListener('click', async (e) => {
                const walletType = button.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
                if (walletType) {
                    await this.selectWallet(walletType);
                }
            });
        });
    }

    hideWalletSelectionModal() {
        // Force hide all existing modals immediately
        const allSelectionModals = document.querySelectorAll('.solana-wallet-modal-overlay');
        allSelectionModals.forEach(modal => {
            modal.style.display = 'none';
            modal.remove();
        });

        // Also check for any wallet connection modals and make sure they're on top
        const walletModals = document.querySelectorAll('.wallet-modal-overlay');
        walletModals.forEach(modal => {
            modal.style.zIndex = '25000';
        });

        document.body.style.overflow = '';

        // Force a small delay to ensure DOM cleanup
        return new Promise(resolve => setTimeout(resolve, 10));
    }

    async selectWallet(walletType) {
        this.selectedWallet = walletType;
        this.walletSelected = true;

        // Immediately hide selection modal
        await this.hideWalletSelectionModal();

        // Force remove any lingering selection modals
        setTimeout(() => {
            const allModals = document.querySelectorAll('.solana-wallet-modal-overlay');
            allModals.forEach(modal => modal.remove());
        }, 10);

        // Update button text to "CONNECT WALLET"
        const solanaButtons = document.querySelectorAll('.buy-with-solana');
        solanaButtons.forEach(button => {
            this.updateButtonText(button, 'CONNECT WALLET');
        });

        // Trigger wallet connection immediately
        if (window.walletModal && window.walletModal.handleWalletClick) {
            window.walletModal.handleWalletClick(walletType);
        } else {
            // Fallback: wait a bit for walletModal to be available
            setTimeout(() => {
                if (window.walletModal && window.walletModal.handleWalletClick) {
                    window.walletModal.handleWalletClick(walletType);
                } else {
                    console.error('Wallet modal not found');
                }
            }, 100);
        }
    }

    addModalStyles() {
        // Check if styles already exist
        if (document.querySelector('#solana-wallet-modal-styles')) return;

        const style = document.createElement('style');
        style.id = 'solana-wallet-modal-styles';
        style.textContent = `
            .solana-wallet-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 500;
                padding: 20px;
            }

            .solana-wallet-modal-content {
                background: #000000;
                border: 2px solid #333;
                border-radius: 24px;
                padding: 32px;
                width: 100%;
                max-width: 480px;
                position: relative;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .solana-wallet-modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                color: #9CA3AF;
            }

            .solana-wallet-modal-close:hover {
                color: #6B7280;
            }

            .solana-wallet-modal-header {
                text-align: center;
                margin-bottom: 32px;
            }

            .solana-wallet-modal-header h2 {
                color:rgb(245, 241, 9);
                font-size: 24px;
                font-weight: bold;
                margin: 0 0 8px;
                text-transform: uppercase;
            }

            .solana-wallet-modal-header p {
                color: #9CA3AF;
                margin: 0;
                font-size: 14px;
            }

            .solana-wallet-options {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
            }

            .solana-wallet-option {
                background: #1a1a1a;
                border: 2px solid #333;
                border-radius: 16px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                color: #ffffff;
                font-weight: 600;
            }

            .solana-wallet-option:hover {
                border-color: #04ccef;
                background: #2a2a2a;
                transform: translateY(-2px);
            }

            .solana-wallet-option img {
                width: 48px;
                height: 48px;
                object-fit: contain;
            }

            .solana-wallet-option span {
                font-size: 14px;
                text-align: center;
            }

            @media (max-width: 480px) {
                .solana-wallet-modal-content {
                    padding: 24px;
                    margin: 20px;
                }

                .solana-wallet-options {
                    grid-template-columns: 1fr;
                }

                .solana-wallet-option {
                    flex-direction: row;
                    justify-content: flex-start;
                    text-align: left;
                    padding: 16px;
                }

                .solana-wallet-option img {
                    width: 32px;
                    height: 32px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create global instance
const buySolanaOverride = new BuySolanaOverride();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => buySolanaOverride.init());
} else {
    buySolanaOverride.init();
}

// Also try to initialize after a short delay to ensure Angular is loaded
setTimeout(() => buySolanaOverride.init(), 1000);
setTimeout(() => buySolanaOverride.init(), 3000); // Extra delay for slow loading
