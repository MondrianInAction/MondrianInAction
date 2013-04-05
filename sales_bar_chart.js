MetaLayerCharts =  {

    barChartDefinition : {
    width: 700,
    height: 300,
    chartType: "BarChart",
    datasetType: "CategoryDataset",
    is3d: "true",
    isStacked: "false",
    includeLegend: "false",
    foregroundAlpha: 0.7,
    queryType: 'mdx',
    jndi: "AdventureWorksDW",
    catalog: "solution:MondrianInAction/adventure_works.mondrian.xml",
    title: "Sales by Month",
    urlTemplate: "javascript:MetaLayerCharts.barChartClicked(encode_prepare('{department}'))",
    parameterName: "department",
    query: function(){
    
    var query = "SELECT NON EMPTY {Hierarchize({[Order Date].[Monthly].[Month].Members})} ON COLUMNS," +
                " NON EMPTY {Hierarchize({[Measures].[Qty Ordered]})} ON ROWS FROM [Internet Sales]";
      
      return query;
    }
  }
  
};
