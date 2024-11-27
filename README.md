# InfoSum Data Mapper

This application allows a customer to upload a CSV of their customer data and map the fields in their dataset to those from the InfoSum global schema.
The application is created using Vite, using the React template. SCSS modules have been added for scoped styles.

## Thought process
The idea behind this app is to break down the customers data to it's simplest form, and allow them to decide at that level what the mappings should be. Breaking down each property into a unique row with a single 1:1 map makes it clear what is happening.
The addition of paginating the customers data allows them to quickly skim through the data ensuring the expected values are available.

## Setting up locally
### Installing
Install the application using 

```
npm install
```
### Running 
Run the application using 

```
npm run dev
```

You can use built-in Vite options for network exposing etc, check the console for Vite options
```
  VITE v5.4.11  ready in 371 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  ```

## Assumptions
### User base
* The interface is primarily desktop focussed as it's easier with more screen space but the code is written mobile first
* The instructions use keywords like "mapping", "property" etc and so assumes the users have an understanding of dev-friendly words

### The Data
The input data set can be any property names, or any length of them. 

### The mapping algorithm
This is a simple fuzzy search using string and partial string detection on the property names for now. Future algorithms could be more complex or ML driven.

## Future features
* Data validation to assign mappings based on the data content, not just the property names
  * This could be done using regex or even a custom trained ML model to identify types of unique data and categories/assign it
* Filters for customised views on the data
* Resetting the mappings or applying the original automatic map on one or more properties
* A true summary screen with the customer data being put into the new Schema, available for the customer to browse the new dataset to be 100% on the decisions
* Be able to jump to missing/incomplete mappings without having to scroll around
* Highligh incomplete mappings before trying to proceed
* A better design done by a real designer!