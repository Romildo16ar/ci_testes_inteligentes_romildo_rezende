import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://atende.ciesp.mg.gov.br/');
  await page.getByRole('textbox', { name: 'CPF / CNPJ / Usuário' }).click();
  await page.getByRole('textbox', { name: 'CPF / CNPJ / Usuário' }).fill('romildo.rezende');
  await page.getByRole('button', { name: 'Entrar no Portal' }).click();
  await page.getByRole('link', { name: ' Faça login novamente' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Validador de Assinatura' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Verificar' }).click();
  await page.getByText('Empresário', { exact: true }).click();
  await page.getByText('Prefeitura', { exact: true }).click();
});