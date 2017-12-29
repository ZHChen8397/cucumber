Feature: string
  Scenario: should pending string
    Given I had a string Happy
    When I pending it with Birthday
    Then I should get Happy Birthday

  Scenario Outline: should pending <string2>
    Given a string <string1>
    When pend with <string2>
    Then should get <answer>

    Examples:
    |string1|string2|answer|
    |hello|world|hello world|
    |Happy|Birthday|Happy Birthday|