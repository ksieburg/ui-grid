ui-grid
=======

An AngularJS grid.

# Setup

* Install Lineman globaly `sudo npm install -g lineman`.
* Install the dependencies `npm install`.
* To run the dev grunt tasks `lineman run`.
* With grunt running, `lineman spec` to start test'em (unit tests) and `lineman grunt spec-e2e` to run `Protractor` (e2e testing).

# Requirements

## Development

* **Unit tests**, with "good" code coverage
  * If this is a set of directives rather than a single directive, tests should cover the N! number of combinations the directives can take (where N is the # of directives).
  * Should cover 1.2.0 and 1.0.8?
* **Performance tests** - if possible, have tests that verify the grid takes under a certain amount of time to render/scroll. This has been a weak point in ng-grid.
* **Documentation / How-tos / Examples** - another place that ng-grid is lacking
  * API docs should be built from source, if possible
  * Examples should be built as well, and have their own unit tests to prevent regressions
  * We can pull from the ng-grid issue list of the most request how-tos
* **Continuous Integration**
  * With Travis-CI for testing
  * With SauceLabs for browser coverage
* **Release automation** - don't keep compiled release in this repo (yuck). Build and push somewhere else (gh-pages, another repo, whatever).
  * Allow installation via bower/nuget/*

## Grid

* **Core Functionality**
  * Sorting 
  * Paging 
  * Row selection
  * Filtering
  * Templating
* **Extended Functionality**
 * Freeze columns / Pinning
 * Child Grids
 * Grouping
 * Grouping Summaries (part of grouping?)
 * Inline editing
 * Column reordering
 * Virtualization 
 


* **Goals**
 * The grid should render semantic HTML and be easy to style by providing hooks where appropriate.
