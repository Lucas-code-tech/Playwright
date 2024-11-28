import { test, expect } from '@playwright/test';
import  TestesPageElements   from './page_modules/PageElements_testes';

test('Validar erro login', async ({ page }) => {
  const testesPageElements = new TestesPageElements(page); 
  await page.goto('https://www.saucedemo.com/');
  await testesPageElements.loginPlataforma('teste', 'senha');
  await testesPageElements.ValidarErroLogin.isVisible;
});
test('Validar login com sucesso', async ({ page }) => {
  const testesPageElements = new TestesPageElements(page);
  await page.goto('https://www.saucedemo.com/');
  await testesPageElements.loginPlataforma('standard_user', 'secret_sauce');
  await testesPageElements.ValidarLoginSucesso.isVisible();
  
});
test('Adicionar um item ao carrinho', async ({ page }) => {
  const testesPageElements = new TestesPageElements(page);
  await page.goto('https://www.saucedemo.com/');
  await testesPageElements.loginPlataforma('standard_user', 'secret_sauce');
  await testesPageElements.ValidarLoginSucesso.isVisible();
  await testesPageElements.ClickEmRoupa.click();
  await testesPageElements.ClickEmCarrinho.click();
  await testesPageElements.ValidarObjetoNoCarrinho.isVisible();
  
});
test('Remover um item ao carrinho', async ({ page }) => {
  const testesPageElements = new TestesPageElements(page);
  await page.goto('https://www.saucedemo.com/');
  await testesPageElements.loginPlataforma('standard_user', 'secret_sauce');
  await testesPageElements.ValidarLoginSucesso.isVisible();
  await testesPageElements.ClickEmRoupa.click();
  await testesPageElements.ClickEmCarrinho.click();
  await testesPageElements.ValidarObjetoNoCarrinho.isVisible();
  await testesPageElements.BtnRemover.click();
  await testesPageElements.ValidarObjetoNoCarrinho.isHidden();
});
test('Validar a expansão do menu contextual', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[id="react-burger-menu-btn"]').click();
  await page.isVisible('[data-test="inventory-sidebar-link"]') 
});

test('Validar a expansão do menu contextual opção todos os itens', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[id="react-burger-menu-btn"]').click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.isVisible('[data-test="header-container"]');
});
test('Validar a expansão do menu contextual opção sobre', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[id="react-burger-menu-btn"]').click();
  await page.locator('[id="about_sidebar_link"]').click();
  await page.isVisible('[id="__next"]');
});
test('Validar a expansão do menu contextual opção "Sair"', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[id="react-burger-menu-btn"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.isVisible('[data-test="username"]');
});
test('Validar filtro preço alto para baixo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  (await page.isVisible('[data-test="inventory-item-price"]'));
});
test('Validar filtro nome A a Z', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.isVisible('[data-test="header-container"]');
  await page.locator('[data-test="product-sort-container"]').selectOption('az');
  await page.isVisible('[data-test="inventory-item-description"]');
});



