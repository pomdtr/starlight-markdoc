import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    tags: {
        cardGrid: {
            attributes: {
                stagger: {
                    type: Boolean
                }
            },
            render: component('@astrojs/starlight/components', 'CardGrid'),
        },
        card: {
            attributes: {
                title: {
                    type: String
                },
                icon: {
                    type: String
                },
            },
            render: component('@astrojs/starlight/components', 'Card'),
        }
    },
});
