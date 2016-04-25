angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap']);
angular
  .module('mwl.calendar.docs')
  .controller('DayViewSplitCtrl', function(moment) {

    var vm = this;
    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = moment().startOf('month').toDate();

  });
