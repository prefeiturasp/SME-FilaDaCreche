export default {
  buffer_distance: 2.2, // the initial buffer distance for calculating school proximity
  distance_units: "kilometers",
  age_ranges: [
      {cd_ciclo_ensino:"1", cd_faixa:"1", dc_serie_ensino:"Berçário I", serie:"1", mes_min:"0", mes_max:"13"},
      {cd_ciclo_ensino:"1", cd_faixa:"2", dc_serie_ensino:"Berçário II", serie:"4", mes_min:"13", mes_max:"22"},
      {cd_ciclo_ensino:"1", cd_faixa:"3", dc_serie_ensino:"Mini Grupo I", serie:"27", mes_min:"22", mes_max:"34"},
      {cd_ciclo_ensino:"1", cd_faixa:"4", dc_serie_ensino:"Mini Grupo II", serie:"28", mes_min:"34", mes_max:"46"},
      {cd_ciclo_ensino:"2", cd_faixa:"5", dc_serie_ensino:"Infantil I", serie:"23", mes_min:"", mes_max:""},
      {cd_ciclo_ensino:"2", cd_faixa:"6", dc_serie_ensino:"Infantil II", serie:"25", mes_min:"", mes_max:""}
  ],
  months_list: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
}
