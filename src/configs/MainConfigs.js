export default {
  buffer_distance: 2.2, // the initial buffer distance for calculating school proximity
  distance_units: "kilometers",
  current_year: new Date().getFullYear(),
  max_preschool_age: 4,
  get age_ranges () {
    const currentYear = this.current_year;
    return [
      {cd_ciclo_ensino:"1", cd_faixa:"1", dc_serie_ensino:"Berçário I", serie:"1", mes_min:"0", mes_max:"13", birth_start: Date.parse("4/1/" + (currentYear - 1)), birth_end: Date.parse("12/31/" + currentYear)},
      {cd_ciclo_ensino:"1", cd_faixa:"2", dc_serie_ensino:"Berçário II", serie:"4", mes_min:"13", mes_max:"22", birth_start: Date.parse("4/1/" + (currentYear - 2)), birth_end: Date.parse("3/31/" + (currentYear - 1))},
      {cd_ciclo_ensino:"1", cd_faixa:"3", dc_serie_ensino:"Mini Grupo I", serie:"27", mes_min:"22", mes_max:"34", birth_start: Date.parse("4/1/"  + (currentYear - 3)), birth_end: Date.parse("3/31/" + (currentYear - 2))},
      {cd_ciclo_ensino:"1", cd_faixa:"4", dc_serie_ensino:"Mini Grupo II", serie:"28", mes_min:"34", mes_max:"46", birth_start: Date.parse("4/1/" + (currentYear - 4)), birth_end: Date.parse("3/31/" + (currentYear - 3))}//,
      // NOTE: not yet calulating for these ranges
      // {cd_ciclo_ensino:"2", cd_faixa:"5", dc_serie_ensino:"Infantil I", serie:"23", mes_min:"", mes_max:"", birth_start: Date.parse("4/1/" + (currentYear - 5)), birth_end: Date.parse("3/31/" + (currentYear - 4))},
      // {cd_ciclo_ensino:"2", cd_faixa:"6", dc_serie_ensino:"Infantil II", serie:"25", mes_min:"", mes_max:"", birth_start: Date.parse("4/1/" + (currentYear - 6)), birth_end: Date.parse("3/31/" + (currentYear - 5))}
    ]
  },
  months_list: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  ga_tracking_id: process.env.REACT_APP_GA_TRACKING_ID
}
