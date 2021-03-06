'use strict';

var $ = require('jquery');

var tables = require('../modules/tables');
var columns = require('../modules/columns');

var expenditureTemplate = require('../../templates/independent-expenditures.hbs');

$(document).ready(function() {
  var $table = $('#results');
  new tables.DataTable($table, {
    autoWidth: false,
    title: 'Independent expenditures',
    path: ['schedules', 'schedule_e'],
    columns: columns.independentExpenditures,
    paginator: tables.SeekPaginator,
    rowCallback: tables.modalRenderRow,
    useExport: true,
    order: [[5, 'desc']],
    useFilters: true,
    callbacks: {
      afterRender: tables.modalRenderFactory(expenditureTemplate)
    }
  });
});
