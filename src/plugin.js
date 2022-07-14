import ContainerHeader from './components/ContainerHeader.vue';

// eslint-disable-next-line no-undef
kiwi.plugin('header-topic', (kiwi) => {
    kiwi.replaceModule('components/ContainerHeader', ContainerHeader);
});
