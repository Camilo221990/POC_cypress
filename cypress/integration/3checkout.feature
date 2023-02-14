Feature: Carrito page


Scenario: Chequear compra
Given El usuario debe iniciar sesion y verifica el listado de sus productos
    When A user clicks on the login button
    And A user clicks on the Ingresar
    And A user enters the user "Ana123" and password "123456789" and login
    And A user clicks on the Accesorios
    And A user clicks on the Accesorio 1
    Then A user clicks on the Accesorio 2



Scenario: Your Information
# Given El usuario registra informacion
    # When El usuario digita First Name "Andres"
    # And El usuario digita Last Name "Chaves"
    # And El usuario digita Zip Postal Code "57"
# Then El usuario da click para continuar
#Then Revisa el carrito