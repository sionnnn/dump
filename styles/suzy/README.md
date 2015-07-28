# Susy

## Notes

Grid framework not a grid system.

You choose what class names to give, so can be used with BEM instead of forced names.

Example:

.main{
    @include span(9); 
}

.sidebar{
    @include span(3 last); 
}

or @include span(9 of 12);


Store all grid information in a map:

$susy: (
  columns: 12,
  gutters: .25,
  container: 960px
);

Very easy to change.