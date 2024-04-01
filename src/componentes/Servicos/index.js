import "./servicos.css";
import "./tabs.css";
import pilatesIcon from "../../imagens/pilates2.svg";
import lpfIcon from "../../imagens/meditando.svg";
import treiIcon from "../../imagens/pesos.svg";
import fisioIcon from "../../imagens/pilates.svg";
import Card from "./Card";

export const services = [
  {
    id: "5dfhfs#d",
    name: "Slide 1",
    icon: lpfIcon,
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
    beneficios: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada.",
      "Curabitur sit amet nulla at ipsum tristique pharetra.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "In hac habitasse platea dictumst. Sed eget justo non magna dapibus malesuada.",
      "Vivamus et ligula eu lacus maximus consequat eget a elit.",
      "Sed nec sapien eget lorem pharetra tempor. Phasellus non nunc sed metus molestie vestibulum.",
    ],
  },
  {
    id: "#ufjd5",
    name: "Slide 2",
    icon: pilatesIcon,
    tabs: [
      {
        title: "Tab1",
        subtitle: "Tab 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
        benefits: [
          "Vestibulum euismod enim vel est fermentum, vitae vehicula libero laoreet.",
          "Maecenas eget tortor id turpis faucibus vehicula ut vitae diam.",
          "Cras nec augue ultricies, fermentum dolor sed, rutrum libero.",
          "Nullam nec felis non est commodo vehicula nec vel orci.",
          "Etiam feugiat lectus nec risus efficitur, sed faucibus leo vehicula.",
        ],
      },
      {
        title: "Tab2",
        subtitle: "Tab 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
        benefits: [
          "Nunc sit amet neque vitae magna suscipit egestas.",
          "Sed vel felis ac leo accumsan ultricies non ac ligula.",
          "Nulla facilisi. Phasellus et purus eu mauris suscipit hendrerit.",
          "Donec pretium purus nec justo malesuada, in faucibus odio ullamcorper.",
          "Fusce id libero vehicula, lacinia magna nec, convallis justo.",
        ],
      },
      {
        title: "Tab3",
        subtitle: "Tab 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
        benefits: [
          "Duis eget nisi vel justo ullamcorper malesuada nec at magna.",
          "Vestibulum vel velit nec justo sollicitudin consequat.",
          "Integer commodo lacus vitae ante malesuada, at luctus odio viverra.",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Fusce nec velit nec metus vehicula sollicitudin sit amet a est.",
        ],
      },
      {
        title: "Tab4",
        subtitle: "Tab 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
        benefits: [
          "Donec id sapien ac velit vulputate malesuada nec sed ipsum.",
          "Vestibulum auctor odio et urna dapibus, sit amet suscipit justo dapibus.",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Nunc dignissim mauris id nibh fermentum, sed gravida ipsum eleifend.",
          "In eget justo id velit lacinia mattis.",
        ],
      },
    ],
  },
  {
    id: "98jsujhdhs4hd$msd7",
    name: "Slide 3",
    icon: treiIcon,
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
    beneficios: [
      "Vestibulum euismod enim vel est fermentum, vitae vehicula libero laoreet.",
      "Maecenas eget tortor id turpis faucibus vehicula ut vitae diam.",
      "Cras nec augue ultricies, fermentum dolor sed, rutrum libero.",
      "Nullam nec felis non est commodo vehicula nec vel orci.",
      "Etiam feugiat lectus nec risus efficitur, sed faucibus leo vehicula.",
    ],
  },
  {
    id: "#da6gxdap6sd",
    name: "Slide 4",
    icon: fisioIcon,
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque eget magna malesuada, id convallis dolor lacinia. Proin ut commodo turpis.",
    beneficios: [
      "Vestibulum euismod enim vel est fermentum, vitae vehicula libero laoreet.",
      "Maecenas eget tortor id turpis faucibus vehicula ut vitae diam.",
      "Cras nec augue ultricies, fermentum dolor sed, rutrum libero.",
      "Nullam nec felis non est commodo vehicula nec vel orci.",
      "Etiam feugiat lectus nec risus efficitur, sed faucibus leo vehicula.",
    ],
  },
];

const Servicos = () => {
  return (
    <section className="services section" id="servicos">
      <h2 className="section__title servicos__title">Serviços</h2>

      <div className="services__container container grid">
        <Card services={services} />
      </div>
    </section>
  );
};

export default Servicos;
