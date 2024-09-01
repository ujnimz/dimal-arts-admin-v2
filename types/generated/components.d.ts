import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoMeta extends Schema.Component {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'seoMeta';
    icon: 'globe';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
