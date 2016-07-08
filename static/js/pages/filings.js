'use strict';

/* global require, document */

var $ = require('jquery');

var tables = require('../modules/tables');
var filings = require('../modules/filings');
var columnHelpers = require('../modules/column-helpers');
var columns = require('../modules/columns');

var filingsColumns = columnHelpers.getColumns(
  columns.filings,
  [
    'filer_name', 'pdf_url', 'pages', 'amendment_indicator', 'receipt_date', 'modal_trigger'
  ]
);

$(document).ready(function() {
  var $table = $('#results');
  new tables.DataTable($table, {
    autoWidth: false,
    title: 'Filings',
    path: ['filings'],
    columns: filingsColumns,
    rowCallback: filings.renderRow,
    // Order by receipt date descending
    order: [[4, 'desc']],
    useFilters: true,
    useExport: true,
    callbacks: {
      afterRender: filings.renderModal
    }
  });
});
