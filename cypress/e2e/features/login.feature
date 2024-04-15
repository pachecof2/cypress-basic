Feature: 01 - Crowdar Academy 2024 - Login
  @login
  Scenario: Login como admin
    Given  Me logueo como admin correctamente
  
  @login
  Scenario: Login como usuario normal
    Given  Me logueo como usuario correctamente
  
  @login
  Scenario Outline: Login usuario - Escenario Outline 
    Given Navego al sitio App Clockify Me
    When Me logueo como usuario con user '<user>' y pass '<pass>' 
    Then Valido saludo de bienvenida en el Título

        Examples:
          | user                                            |   pass                |
          | yafin69474@adstam.com                           |   Crowdar2024!        |