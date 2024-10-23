Feature: 02 - Crowdar Academy 2024 - Workspace
  @NewWorkspace @Workspace
  Scenario Outline: Crear un workspace exitosamente
    Given Navego al sitio App Clockify Me
    When Ingreso user '<user>' y pass '<pass>' 
    When el usuario accede a la sección 'Manage workspaces' para crear un nuevo Workspace
    When ingresa '<nombreBase>' en el campo 'Workspace name' y hace clic en el botón 'Create'
    Then se crea exitosamente el nuevo workspace con el nombre '<nombreBase>'

    Examples:
      | nombreBase                  | user                                            |   pass                |
      | Automation Workspace        | fapc2809@gmail.com                               |   29598395            |
   
   @EditWorkspace @Workspace
  Scenario Outline: Editar nombre un workspace exitosamente
    Given Navego al sitio App Clockify Me
    When Ingreso user '<user>' y pass '<pass>' 
    When accedo a la sección 'Manage workspaces' y edito un Workspace con el nombre '<nombreNuevo>'
    Then actualiza exitosamente el nombre del workspace '<nombreNuevo>'

    Examples:
       | user                                            |   pass                | nombreNuevo          |
       | fapc2809@gmail.com                               |   29598395            | nombre editado       |