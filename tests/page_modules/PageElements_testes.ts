import { expect, type Locator, type Page  } from '@playwright/test';

export default class TestesPageElements {
    readonly page: Page;
    UsuarioLogin  : Locator;
    SenhaLogin : Locator;
    BtnAvancar : Locator;
    ValidarErroLogin : Locator;
    ValidarLoginSucesso : Locator;
    ClickEmRoupa : Locator;
    ClickEmCarrinho : Locator;
    ValidarObjetoNoCarrinho : Locator;
    BtnRemover : Locator;
    

  constructor(page : Page) {
    this.UsuarioLogin = page.locator('[data-test="username"]');
    this.SenhaLogin = page.locator('[data-test="password"]');
    this.BtnAvancar = page.locator('[data-test="login-button"]');
    this.ValidarErroLogin = page.locator('[data-test="error"]');
    this.ValidarLoginSucesso = page.locator('[data-test="header-container"]');
    this.ClickEmRoupa = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.ClickEmCarrinho = page.locator('[data-test="shopping-cart-link"]');
    this.ValidarObjetoNoCarrinho = page.locator('[data-test="item-4-title-link"]');
    this.BtnRemover = page.locator('[data-test="remove-sauce-labs-backpack"]')

  }

  public async loginPlataforma(Usuario : string, Senha : string){
  await this.UsuarioLogin.click();
  await this.UsuarioLogin.fill(Usuario);
  await this.SenhaLogin.click();
  await this.SenhaLogin.fill(Senha);
  await this.BtnAvancar.click();
  
}
public async GoTO(){
  await this.page.goto('https://www.saucedemo.com/'); 
}

}



