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
  
  enum TSede {
    CA,
    SJ,
    LI,
    AL,
    SC
  }
  
  const sedeSeleccionada: TSede = TSede.AL;
  const valorSede: TSedeValue = Object.values(TSedeValues).find(value => value.codigo === sedeSeleccionada.toString()) as TSedeValue;