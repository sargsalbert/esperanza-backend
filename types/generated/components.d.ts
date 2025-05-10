import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    simpleText: Schema.Attribute.Component<'shared.simple-text', false>;
  };
}

export interface SharedSectionText extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_texts';
  info: {
    displayName: 'sectionText';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    introText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSimpleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_texts';
  info: {
    displayName: 'simpleText';
    icon: 'arrowLeft';
  };
  attributes: {
    simple: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedTabItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_items';
  info: {
    description: '';
    displayName: 'TabItem';
    icon: 'bulletList';
  };
  attributes: {
    contentJson: Schema.Attribute.JSON;
    label: Schema.Attribute.String;
    tabContent: Schema.Attribute.Blocks;
  };
}

export interface SharedTabbedSliderBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabbed_slider_blocks';
  info: {
    description: '';
    displayName: 'tabbedSliderBlock';
    icon: 'database';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    TabItem: Schema.Attribute.Component<'shared.tab-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface TabblocksBulletTab extends Struct.ComponentSchema {
  collectionName: 'components_tabblocks_bullet_tabs';
  info: {
    displayName: 'BulletTab';
    icon: 'bell';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface TabblocksItems extends Struct.ComponentSchema {
  collectionName: 'components_tabblocks_items';
  info: {
    displayName: 'items';
    icon: 'archive';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TabblocksTwoColumnTab extends Struct.ComponentSchema {
  collectionName: 'components_tabblocks_two_column_tabs';
  info: {
    displayName: 'TwoColumnTab';
    icon: 'attachment';
  };
  attributes: {
    items: Schema.Attribute.Component<'tabblocks.items', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-text': SharedSectionText;
      'shared.seo': SharedSeo;
      'shared.simple-text': SharedSimpleText;
      'shared.slider': SharedSlider;
      'shared.tab-item': SharedTabItem;
      'shared.tabbed-slider-block': SharedTabbedSliderBlock;
      'tabblocks.bullet-tab': TabblocksBulletTab;
      'tabblocks.items': TabblocksItems;
      'tabblocks.two-column-tab': TabblocksTwoColumnTab;
    }
  }
}
