    
/**
  * Highcharts 
 **/
var chart = new Highcharts.Chart('container_one', {
    title: {
        text: '',
        x: -20
    },
    subtitle: {
        text: '',
        x: -20
    },
    xAxis: {
        categories: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16', '09-17']
    },
    legend: {
            enabled: false   //去掉数据name
    },
     credits: {
            enabled: false  //去掉版权信息
        },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    series: [{
        name: '吐槽数',
        data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
    }]
});



var chart = new Highcharts.Chart('container_two', {
    title: {
        text: '',
        x: -20
    },
    subtitle: {
        text: '',
        x: -20
    },
    xAxis: {
        categories: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16', '09-17']
    },
    legend: {
            enabled: false   //去掉数据name
    },
     credits: {
            enabled: false  //去掉版权信息
        },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    series: [{
        name: '点击数',
        data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
    }]
});

