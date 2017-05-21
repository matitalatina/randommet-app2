import { Choice } from "./models/choice";
import { RandomFromList } from "./list";

export class Oracle {
  static choose(): Choice<string> {
    return RandomFromList.choose(this.getChoices());
  }

  static getChoices(): Array<Choice<string>> {
    return [{ "label": "I segnali indicano sì." },
    { "label": "Sì." },
    { "label": "Senza dubbio." },
    { "label": "Le mie fonti dicono no." },
    { "label": "Per come la vedo io, sì." },
    { "label": "Puoi contarci." },
    { "label": "Concentrati e richiedilo." },
    { "label": "Le prospettive non sono così buone." },
    { "label": "È decisamente così." },
    { "label": "Ora è meglio non dirtelo..." },
    { "label": "Sono molto dubbioso." },
    { "label": "Sì, decisamente." },
    { "label": "È certo." },
    { "label": "Non posso predirlo ora." },
    { "label": "Molto probabilmente." },
    { "label": "Richiedilo più tardi." },
    { "label": "La mia risposta è no." },
    { "label": "Le prospettive sono buone." },
    { "label": "Non contarci" },
    { "label": "Sì, a tempo debito." },
    { "label": "Le mie fonti dicono no." },
    { "label": "Decisamente no." },
    { "label": "Devi aspettare." },
    { "label": "Ho i miei dubbi." },
    { "label": "Le prospettive sono così così." },
    { "label": "Mi sembra buono!" },
    { "label": "Chi lo sa?" },
    { "label": "Mi piace!" },
    { "label": "Probabilmente." },
    { "label": "Stai scherzando?" },
    { "label": "Fallo!" },
    { "label": "Non scommetterci." },
    { "label": "Dimenticalo." }].map(obj => new Choice(obj.label));
  }
}