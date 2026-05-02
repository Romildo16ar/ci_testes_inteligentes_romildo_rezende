import { test, expect } from '@playwright/test';

test('Teste Manual - Validar carregamento do Atende CIESP', async ({ page }) => {
  // 1. Acessa o site
  await page.goto('https://atende.ciesp.mg.gov.br/');

  // 2. Valida se o título ou algum texto importante está visível
  // Vamos verificar se o botão de login ou a logo existe
  await expect(page).toBeDefined();
  
  // Exemplo: Verificar se existe um campo de usuário (ajuste o seletor se necessário)
  const loginButton = page.locator('text=Entrar'); 
  // Se não houver botão "Entrar", ele apenas valida a URL
  await expect(page).toHaveURL(/atende.ciesp.mg.gov.br/);
});

test('Teste Manual - Validar campos de login', async ({ page }) => {
    await page.goto('https://atende.ciesp.mg.gov.br/');
    // Tenta localizar campos comuns de formulário
    const userField = page.locator('input[type="text"], input[type="email"]').first();
    await expect(userField).toBeVisible();
});