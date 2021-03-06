$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ['Energy', 'Materials', 'Capital Goods', 'Commercial & Professional Services', 'Transportation', "Auto & Components", "Consumer Durables & Apparel", "Consumer Services", "Media", "Retailing", "Food & Staples Retailing", "Food, Bev & Tobacco", "Household & Personal Products", "Health Care Equipment & Services", "Pharma & Biotech", "Banks", "Diversified Financials", "Insurance", "Real Estate", "Software & Services", "Tech, Hardware & Equipment", "Semiconductors & Semiconductor Equip", "Telecom", "Utilities"]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Bills'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Signed into law',
            data: [7, 3, 9, 7, 7, 5, 2, 1,
                  	2, 0, 2, 2, 1, 12, 12, 3,
                  	2, 11, 4, 10, 11, 5, 6, 9],
            color: "#DB5800"
        }, {
            name: 'Passed one chamber',
            data: [3, 1, 6, 2, 5, 3,
                  	2, 1, 0, 1, 1, 2, 0, 3, 
                  	2, 2, 1, 4, 3, 4, 5, 4, 
                  	2, 3], 
            color: "#F0C600"
        }, {
            name: 'Introduced',
            data: [337, 143, 368, 265, 415,
                  	247, 45, 162, 67, 56, 
                  	99, 159, 40, 624, 471, 300, 248,
                  	732, 239, 486, 451, 188, 171, 326],
            color: "#59631E"
        }]
    });
});