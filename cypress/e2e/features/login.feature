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
    When Ingreso user '<user>' y pass '<pass>' 
    Then Valido saludo de bienvenida en el Título

        Examples:
          | user                                            |   pass                |
          | fapc2809@gmail.com                               |   29598395            |


  @login @Logout
   Scenario Outline: Logout
    Given Navego al sitio App Clockify Me
    When Me logueo como usuario con user '<user>' y pass '<pass>'
    When Presiona el botón 'Log In' 
    When Presiona el botón 'Log Out'
    Then El usuario está en la página de inicio de Clockify

       Examples:
          | user                                            |   pass                |
          | fapc2809@gmail.com                               |   29598395            |

     @LoginFailed
    Scenario Outline: Iniciar sesión con correo válido y contraseña incorrecta
    Given Navego al sitio App Clockify Me
    When Me logueo como usuario con user '<user>' y pass '<pass>'
    Then Se visualiza alerta '<alert>' exitosamente

    Examples:
      | user                     | password | alert                     |
      | Test.Register@yopmail.fr | 12345678 | Invalid email or password |

    @LoginFailed
  Scenario Outline: Iniciar sesión con correo inválido y contraseña correcta
   Given Navego al sitio App Clockify Me
    When Me logueo como usuario con user '<user>' y pass '<pass>'
    Then Se visualiza alerta '<alert>' exitosamente

    Examples:
      | user                    | pass      | alert                     |
      | test.registeryopmail.fr | 123456   | Email format is not valid  |
      | test.                   | 123456   | Email format is not valid  |