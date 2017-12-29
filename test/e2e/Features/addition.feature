Feature: backgroud

    
  Scenario: 2 + 1
    Given I start with 2
    When I add 1
    Then I end up with 3

  Scenario: add multi number
    Given I start with 0
    When I add the follow numbers:
    |1|
    |2|
    |3|
    |4|
    |5|
    Then I end up with 15