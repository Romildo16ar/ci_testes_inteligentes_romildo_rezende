import { test, expect } from '@playwright/test';

test('Fluxo de Navegação CIESP - IA Support', async ({ page }) => {
  await page.goto('https://atende.ciesp.mg.gov.br/', { waitUntil: 'networkidle', timeout: 60000 });
  const avisos = page.getByText('Fechar', { exact: false });
  if (await avisos.isVisible()) {
    await avisos.click();
  }

  await page.getByRole('textbox', { name: 'CPF / CNPJ / Usuário' }).fill('romildo.rezende');
  
  await page.getByRole('button', { name: 'Entrar no Portal' }).click();

  await expect(page).toHaveURL(/atende.ciesp.mg.gov.br/);
});