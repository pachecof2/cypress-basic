 Feature: 03 - Crowdar Academy 2024 - Project

 @Project
  Scenario Outline: Crear un Proyecto exitosamente
    Given Navego al sitio App Clockify Me
    When Ingreso user '<user>' y pass '<pass>' 
    When el usuario accede a la sección 'New Project' y crea un nuevo Projecto con el nombre '<nombreBase>'
    Then se crea exitosamente el nuevo Project con el nombre '<nombreBase>'

    Examples:
      | nombreBase                  | user                                            |   pass                |
      | Automation Project         | fapc2809@gmail.com                               |   29598395            |
   