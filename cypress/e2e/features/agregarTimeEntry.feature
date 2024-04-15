Feature: 02 - Crowdar Academy 2024 - Agregar Time Entry

    @timeTracker @addEntry
    Scenario Outline: Agregar Proyecto, Time Entry y luego eliminar proyecto
        Given Me logueo como usuario correctamente - usuario normal
        When Ingreso user '<user>' y pass '<pass>' 
        And Agrego Proyecto Nuevo
        * Agrego task 01
        * Agrego task 02
        * Agrego task 03
        When Elimino Proyectos generados
        Then Cierro sesion exitosamente
        
        
       Examples:
          | user                                            |   pass                |
          | yafin69474@adstam.com                           |   Crowdar2024!        |