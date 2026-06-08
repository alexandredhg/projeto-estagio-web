
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-toggle') as HTMLInputElement | null;
    const switchLabel = document.getElementById('switch-label') as HTMLElement | null;
    
    const currentTheme = localStorage.getItem('theme');

    /**
     * Aplica o tema selecionado mudando a classe do body e o texto descritivo.
     * @param theme 'dark' | 'light'
     */
    const applyTheme = (theme: 'dark' | 'light'): void => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggleCheckbox) {
                themeToggleCheckbox.checked = true;
                themeToggleCheckbox.setAttribute('aria-checked', 'true');
            }
            if (switchLabel) switchLabel.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggleCheckbox) {
                themeToggleCheckbox.checked = false;
                themeToggleCheckbox.setAttribute('aria-checked', 'false');
            }
            if (switchLabel) switchLabel.textContent = 'Modo Escuro';
        }
    };

    // Inicialização do tema baseado no armazenamento local
    if (currentTheme === 'dark') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Escuta a mudança de estado do switch
    if (themeToggleCheckbox) {
        themeToggleCheckbox.addEventListener('change', () => {
            if (themeToggleCheckbox.checked) {
                localStorage.setItem('theme', 'dark');
                applyTheme('dark');
            } else {
                localStorage.setItem('theme', 'light');
                applyTheme('light');
            }
        });
    }
});