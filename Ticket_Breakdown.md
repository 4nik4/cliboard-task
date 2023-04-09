# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Update Agent table to include custom id field
In order to allow Facilities to save their own custom ids for Agents, we need to add a new field to the Agent table in our database.

**Acceptance Criteria:**
- New field called "custom_id" is added to the Agent table.
- New field is nullable.
- New field is added to the API and can be accessed by the Facilities.

**Effort Estimate:** 2 hours

**Implementation Details:**
- Add a new column called "custom_id" to Agent database table.
- Update the Agent API to include the new "custom_id" field.
- Write API endpoint to allow Facilities to update custom_id for an Agent.
- Write unit tests to ensure the custom_id field is working correctly.

---

## Ticket 2: Update getShiftsByFacility function to include custom_id
In order to include the custom_id of each Agent on the reports, we need to update the getShiftsByFacility function to return the custom_id if it exists, in addition to the internal database id.

**Acceptance Criteria:**
- The getShiftsByFacility function now returns the custom_id of the Agent, if it exists, in addition to the internal database id.

**Effort Estimate:** 3 hours

**Implementation Details:**
Update the SQL query in getShiftsByFacility to include the custom_id field from the Agent table.
Write unit tests to ensure the custom_id is returned correctly.

---

## Ticket 3: Update generateReport function to use custom_id if it exists
In order to use the custom_id on the reports, we need to update the generateReport function to check if the custom_id exists for each Agent and use it if it does.

**Acceptance Criteria:**
- The generateReport function now checks if the custom_id exists for each Agent and uses it on the report if it does.
- If the custom_id does not exist, the internal database id is used instead.

**Effort Estimate:** 4 hours

**Implementation Details:**
- Update the code in generateReport to check if the custom_id exists for each Agent and use it if it does.
- If the custom_id does not exist, use the internal database id instead.
- Write unit tests to ensure the generateReport function is working correctly.

---

## Ticket 4: Update API documentation to include custom_id
In order to inform Facilities of the new custom_id feature, we need to update our API documentation to include information about it.

**Acceptance Criteria:**
- The API documentation is updated to include information about the custom_id.
- The documentation includes how to update the custom_id for an Agent.

**Effort Estimate:** 1 hour

**Implementation Details:**
- Update the API documentation to include information about the custom_id.
- Write a guide on how Facilities can update the custom_id for an Agent.


## Overall Effort Estimate: 10 hours

