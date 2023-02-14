Feature: Login Page
    Feature Page where the users can login to their accoutns

  # The first example has two steps
  Scenario: Succes login
  Given A user enters to the login page
    When A user clicks on the login button
    And A user clicks on the Ingresar
    And A user clicks on the Regitrar
    And A user enters the user "Ana123"
    And A registrar document "21058035"
    And A registrar password "123456789"
    And A registrar firtsName "Elvira"
    And A registrar lastName "Chaves"
    Then A user clicks on the Registrar usuario



  #Scenario: Logeo
  #Given Ingresar a la cuenta
  #When Dar clicks on the cuenta
    #And Dar clicks on the Ingresar
    #And A user enters the user "Ana123"
    #And A user enters the password "123456789"
    #Then Dar clicks on the loguearse
    #Then A user will receive a locked out message



