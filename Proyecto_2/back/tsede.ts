interface TSedeValue {
    codigo: string;
    descripcion: string;
  }
  
  const TSedeValues = {
    CA: { codigo: 'CA', descripcion: 'Campus tecnológico central Cartago' },
    SJ: { codigo: 'SJ', descripcion: 'Campus tecnológico local San José' },
    LI: { codigo: 'LI', descripcion: 'Centro académico de Limón' },
    AL: { codigo: 'AL', descripcion: 'Centro académico de Alajuela' },
    SC: { codigo: 'SC', descripcion: 'Campus tecnológico local cartago' }
  }
  
export enum TSede {
    CA = "CA",
    SJ = "SJ",
    LI = "LI",
    AL = "AL",
    SC = "SC"
  }
  
  const sedeSeleccionada: TSede = TSede.AL;
  const valorSede: TSedeValue = Object.values(TSedeValues).find(value => value.codigo === sedeSeleccionada.toString()) as TSedeValue;