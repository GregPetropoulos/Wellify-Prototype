# Well Rox

---

## Well Rox App

## Intro

Well Rox is a full stack MERN app with Redux state management. Well Rox aims to create a great user experience for students, geologist, and engineers. Well logs can be loaded via .LAS or tff file, geologic formation tops picked, correlate a cross-section of multiple well logs and formation thickness, and create an isopach map. Well Rox is competitive enough to be used for commercial and academic resources. No GIS experience is necessary or used.

# SMEAC
[Situation](#situation)
[Mission](#mission)
[Execution](#execution)
[Admin and Logistics](#admin-and-logistics)
[Command/Comm](#command)

## Situation
## Mission
## Execution
## Command/Comm


## Problem Statement

### The Well Rox solves several problems.
- Houston we have a problem......when a geologist must become a software engineer to read a well log beyond traditional methods
- The cost effective well logging software resources are unavailable to students and independent geologist.
- There lacks an open source community for well log and geologic technologies to be utilized.
- Often times enterprise software is proprietary and the data is formatted differently then LAS, creating more labor intensive work to translate the data.
- Existing free software is inadequate, lacks positive user experience

## Features

- Loading .LAS files into a new Project is seamless
- Translates tff files into LAS
- Pick tops and thickness from well log data
- Create cross-sections with well logs
- Create an isopach map
- Search bar for a well log or project
## Design

Figma
Create a Project
The well log
-Geologic formation top picks(selected) for correlation
-Gamma ray
-Gas
The cross-section
-Correlating tops and thickness
The Isopach Map

## Project Management

Trello

## UX

SEARCH BAR FOR PROJECTS OR WELL LOGS

START PROJECT-Loads a blank new project
EDIT PROJECT-Loads an existing project
DELETE PROJECT-delete selected project
SAVE PROJECT
READ PROJECT-Print or download pdf
WITHIN A PROJECT-Multiple well logs will live

LOAD LAS WELL LOG
READ LAS WELL LOG INTO UI
DELETE LAS WELL LOG
SAVE LAS WELL LOG

CREATE A CUSTOM DATA STRUCTURE TO ACCESS LAS AND MAKE EDITS
UPDATED CUSTOM DATA STRUCTURE BY TOP PICKS (ELEV), THICKNESS, LITHOLOGY, FAULT, FACIES
TRANSLATE INTO CROSS SECTION CORRELATION BY LOCATION AND DEPTH
TRANSLATE INTO ISOPACH
-PRINT OR DOWNLOAD WELL LOG, CROSS-SECTION, OR ISOPACH MAP 

## ICEBOX

EXTRACT DATA INTO EXCEL??
3D MODELING
INTENSE DATA MINING/AI/PREDICTION
CALCULATIONS PER WELL OR PROJECT?

# UI

//Login in/out-Sign up page---this will not exist for demo

Home Page includes:
-dashboard
nav links 
- Home Link
- Projects link
- Well logs Link 
- Search bar for a well log or project
-map of wells loaded by projects from user, on hover tooltip meta data
-well log on map clicked on will take you to the well log itself

Projects Page includes:
-list of projects
-start projects button
-delete projects button
-edit projects button
-save projects button
-all the well logs per project
-google map of projects

Well Log Page includes:
-specific well log details
-LAS file raw and user friendly
-Download LAS button

FAQ Page includes:

Resource Page includes:
-docs
-geologic time scale


Prototype Feedback Page- only for demo includes:
form

SCENARIO 1 Working with LAS
STEPS
LOCAL load a text las file
BROWSER load a text las file
FORMATTING
-stringify it for json prep
-eliminate white space and useless fields -map through
-parse newly formatted string as json

## USE

## DB SCHEMA

Mongoose Schema

MongoDB

## WORK
### TFF TO LAS (Python??)

### LAS CERTIFIED
- Check if LAS is formatted correctly
- LASIO?
 
### LAS TO JSON
SCENARIO 1 Working with LAS
STEPS
LOCAL load a text las file
BROWSER load a text las file
FORMATTING
-stringify it for json prep
-eliminate white space and useless fields -map through
-parse newly formatted string as json
### STATE
set State with javascript array of objects
map through for needed data for ui

SCENARIO 2
Working with photos/svg/tff.jpgs saved data to database/excel. If TFF is translated into LAS via python script then take it to scenario1


