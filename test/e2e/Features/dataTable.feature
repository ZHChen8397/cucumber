Feature: dataTable
  Scenario Outline: <a> + <b> + <c> = <answer>
    Given I had number <a>
    When I add with <b>
      And I add another number <c>
    Then I got answer <answer>

    Examples:
    |a|b|c|answer|
    |1|2|3|6|
    |10|15|25|50|

  Scenario: should create user data
    When I create a user:
    |userName|Jeff|
    |email   |123@gmail.com|
    |pwd     |123456|