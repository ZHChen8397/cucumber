Feature: dataTable
  Scenario Outline: <a> + <b> = <answer>
    Given I had number <a>
    When I add with <b>
    Then I got answer <answer>

    Examples:
    |a|b|answer|
    |1|2|3|
    |10|15|25|