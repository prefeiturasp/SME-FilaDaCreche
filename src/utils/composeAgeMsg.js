export default function composeAgeMsg(diff) {
  var yearsDiff = Math.floor(diff / 12);
  var monthsDiff = diff % 12;
  var msgBase = "Entendi, a criança tem ";
  var msgAnd = " e "
  var msgAge = " de idade."
  var suffixMonth = " mês"
  var suffixMonths = " meses"
  var suffixYear = " ano"
  var suffixYears = " anos"

  var msgMonths;
  if (monthsDiff == 1) {
    msgMonths = monthsDiff + suffixMonth;
  } else if (monthsDiff > 1) {
    msgMonths = monthsDiff + suffixMonths;
  }

  var msgYears;
  if (yearsDiff == 1) {
    msgYears = yearsDiff + suffixYear;
  } else if (yearsDiff > 1) {
    msgYears = yearsDiff + suffixYears;
  }

  if (msgYears && msgMonths) {
    return msgBase + msgYears + msgAnd + msgMonths + msgAge;
  } else if (msgYears && !msgMonths) {
    return msgBase + msgYears + msgAge;
  } else if (!msgYears && msgMonths) {
    return msgBase + msgMonths + msgAge;
  }
}
