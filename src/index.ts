// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Seed sectors on startup
    const existingSectors = await strapi.entityService.findMany('api::sector.sector', {
      limit: 1,
    });

    if (!existingSectors || existingSectors.length === 0) {
      const sectorsSeed = [
        {
          name: 'Energía',
          slug: 'sector-energia',
          subtitle: 'Generación, Transmisión y Distribución',
          description: 'Asesoría legal especializada para proyectos de generación eléctrica, líneas de transmisión y sistemas de distribución.',
          icon: 'Zap',
          services: [
            'Contratos de suministro de energía (PPA)',
            'Concesiones eléctricas y autorizaciones',
            'Aspectos regulatorios ante OSINERGMIN',
            'Proyectos de energías renovables',
            'Servidumbres y derecho de vía',
            'Resolución de controversias en energía',
          ],
          order: 1,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Oil & Gas',
          slug: 'sector-oil-gas',
          subtitle: 'Hidrocarburos y Petroquímica',
          description: 'Experiencia comprobada en la industria de hidrocarburos, desde exploración hasta distribución.',
          icon: 'Droplet',
          services: [
            'Contratos upstream y downstream',
            'Licencias y autorizaciones sectoriales',
            'Normativa ambiental y seguridad',
            'Contratos EPC para plantas de procesamiento',
            'Arbitrajes en proyectos petroleros',
            'Gestión de pasivos ambientales',
          ],
          order: 2,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Agroindustria',
          slug: 'sector-agroindustria',
          subtitle: 'Producción y Agronegocios',
          description: 'Soporte jurídico integral para empresas del sector agrícola y agroindustrial.',
          icon: 'Wheat',
          services: [
            'Derechos de uso de agua',
            'Contratos de compra de productos agrícolas',
            'Certificaciones y cumplimiento fitosanitario',
            'Derecho de propiedad rural',
            'Financiamiento agrícola y garantías',
            'Exportación e importación de productos',
          ],
          order: 3,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Sector Público',
          slug: 'sector-publico',
          subtitle: 'Infraestructura y Gestión Gubernamental',
          description: 'Experiencia institucional profunda en entidades del Estado y proyectos de infraestructura pública.',
          icon: 'Building',
          services: [
            'Contratos de obra pública',
            'Asociaciones Público-Privadas (APP)',
            'Procedimientos de selección del Estado',
            'Supervisión y liquidación de contratos',
            'Defensa en controversias contractuales',
            'Gestión de proyectos de inversión pública',
          ],
          order: 4,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'APPs',
          slug: 'sector-apps',
          subtitle: 'Concesiones e Inversión Privada en Infraestructura',
          description: 'Asesoría legal integral en la estructuración, negociación y ejecución de Asociaciones Público-Privadas, concesiones y obras por impuestos, con dominio del marco normativo del DL 1362 y el reglamento OSITRAN/MTC.',
          icon: 'GitMerge',
          services: [
            'Estructuración de contratos APP y concesiones',
            'Obras por impuestos (Ley 29230)',
            'Negociación de adendas y modificaciones contractuales',
            'Renegociación ante PROINVERSIÓN',
            'Resolución de controversias en contratos de concesión',
            'Asesoría regulatoria ante OSITRAN y MTC',
          ],
          order: 5,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Infraestructura',
          slug: 'sector-infraestructura',
          subtitle: 'Proyectos de Construcción y Obra Pública',
          description: 'Soporte jurídico especializado en proyectos de infraestructura pública y privada, con expertise en contratos de construcción bajo estándares internacionales FIDIC y NEC, gestión de claims y resolución de controversias técnicas.',
          icon: 'Building2',
          services: [
            'Contratos de construcción (FIDIC, NEC, EPC)',
            'Gestión de variaciones y adicionales de obra',
            'Preparación y defensa de claims contractuales',
            'Supervisión y liquidación de contratos de obra',
            'Arbitrajes en proyectos de infraestructura',
            'Contratos de concesión vial, portuaria y aeroportuaria',
          ],
          order: 6,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Minería',
          slug: 'sector-mineria',
          subtitle: 'Industria Extractiva y Recursos Naturales',
          description: 'Asesoría legal en la industria minera peruana, desde la etapa exploratoria hasta el cierre de minas, cubriendo aspectos concesionales, ambientales, comunitarios y contractuales en el marco de la normativa del MINEM.',
          icon: 'Mountain',
          services: [
            'Concesiones mineras y permisos sectoriales',
            'Contratos de exploración y explotación',
            'Gestión de relaciones comunitarias y consulta previa',
            'Cumplimiento normativo ante OEFA y MINEM',
            'Contratos EPC y EPCM para plantas mineras',
            'Cierre de minas y gestión de pasivos ambientales',
          ],
          order: 7,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Servicios & Clubes',
          slug: 'sector-servicios-clubes',
          subtitle: 'Instituciones Privadas y Asociaciones',
          description: 'Asesoría jurídica para empresas de servicios, clubes deportivos, asociaciones e instituciones privadas, con enfoque en gobierno institucional, compliance y gestión contractual.',
          icon: 'Users',
          services: [
            'Gobierno corporativo e institucional',
            'Estatutos y reglamentos internos',
            'Contratos de prestación de servicios',
            'Compliance regulatorio sectorial',
            'Gestión de relaciones laborales en servicios',
            'Asesoría en fusiones y adquisiciones institucionales',
          ],
          order: 8,
          publishedAt: new Date().toISOString(),
        },
        {
          name: 'Empresas Familiares',
          slug: 'sector-empresas-familiares',
          subtitle: 'Gobierno Familiar y Continuidad Patrimonial',
          description: 'Acompañamos a empresas familiares en su proceso de profesionalización, estructuración de gobierno corporativo y planificación de la continuidad patrimonial, combinando asesoría jurídica con visión estratégica de largo plazo.',
          icon: 'Home',
          services: [
            'Protocolo familiar y pactos de accionistas',
            'Estructuración de holding familiar',
            'Planificación sucesoral y transferencia patrimonial',
            'Gobierno corporativo para empresas familiares',
            'Incorporación de directores independientes',
            'Due diligence en procesos de profesionalización',
          ],
          order: 9,
          publishedAt: new Date().toISOString(),
        },
      ];

      for (const sector of sectorsSeed) {
        await strapi.entityService.create('api::sector.sector', {
          data: sector,
        });
      }

      console.log('✅ Sectors seeded successfully');
    }
  },
};
