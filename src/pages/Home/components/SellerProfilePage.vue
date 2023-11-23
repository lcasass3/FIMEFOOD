<script setup lang="ts">
import { ref } from 'vue'
import VPublicationListItem from '@/components/VPublicationListItem.vue'
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/20/solid'
import { useUserStore } from '@/stores/useUserStore'
import VReportSmallModal from '@/components/VReportSmallModal.vue'

const doomiePublis = ref([
  {
    title: 'Introduction to TypeScript',
    description:
      'A comprehensive guide for TypeScript beginners, covering fundamental concepts, advanced features, and practical examples. This book is suitable for both front-end and back-end developers looking to enhance their JavaScript skills with TypeScript. Written by an experienced developer with a passion for clean and maintainable code.',
    contact: 'author1@example.com'
  },
  {
    title: 'Advanced React Patterns',
    description:
      'Exploring advanced patterns and techniques in React development, this book dives deep into topics like render props, higher-order components, and hooks. With real-world examples and case studies, readers will gain a solid understanding of how to architect complex React applications. Authored by a React expert with years of industry experience.',
    contact: 'author2@example.com'
  },
  {
    title: 'Node.js Best Practices',
    description:
      'Discover tips and best practices for writing efficient Node.js code that scales. From asynchronous programming to handling errors, this book covers the essential aspects of Node.js development. Suitable for both beginners and experienced developers, it provides insights into building robust and performant server-side applications. Reach out to the author for expert advice and clarifications.',
    contact: 'author3@example.com'
  },
  {
    title: 'Data Science with Python',
    description:
      'Embark on a journey into the world of data science using Python and popular libraries like Pandas, NumPy, and Scikit-learn. This hands-on guide includes practical examples and projects, allowing readers to apply data science techniques to real-world problems. Written by a data scientist with a passion for sharing knowledge and empowering others in the field.',
    contact: 'author4@example.com'
  },
  {
    title: 'Responsive Web Design',
    description:
      'Learn the art of designing websites that seamlessly adapt to various screen sizes and devices. This book covers responsive design principles, CSS media queries, and mobile-first strategies. Whether you are a beginner or an experienced web developer, this guide will enhance your skills in creating user-friendly and visually appealing websites. Connect with the author for additional insights.',
    contact: 'author5@example.com'
  },
  {
    title: 'Cybersecurity Essentials',
    description:
      "Get a comprehensive overview of essential concepts in cybersecurity, including encryption, network security, and incident response. This book is suitable for both beginners and IT professionals looking to strengthen their cybersecurity knowledge. Written by a seasoned cybersecurity expert, it provides practical insights and recommendations to enhance your organization's security posture.",
    contact: 'author6@example.com'
  },
  {
    title: 'GraphQL Fundamentals',
    description:
      'Understand the basics of GraphQL for modern API development. This book covers schema design, queries, mutations, and best practices for building scalable and flexible APIs. Whether you are a front-end developer or an API designer, this guide will equip you with the knowledge to leverage GraphQL effectively. Reach out to the author for additional guidance and expert advice.',
    contact: 'author7@example.com'
  },
  {
    title: 'Mobile App Development with Flutterrrrrrrr',
    description:
      'Dive into the world of cross-platform mobile app development using Flutter and Dart. This hands-on guide includes building UIs, handling state, and integrating with backend services. Suitable for both beginners and experienced developers, it provides a practical approach to creating beautiful and performant mobile apps. Connect with the author for further insights and assistance.',
    contact: 'author8@example.com'
  },
  {
    title: 'Machine Learning in Finance',
    description:
      'Explore the application of machine learning techniques to financial data analysis. This book covers predictive modeling, algorithmic trading, and risk management using machine learning. Whether you are a finance professional or a data scientist, this guide will enhance your understanding of the intersection between machine learning and finance. Contact the author for expert consultations.',
    contact: 'author9@example.com'
  },
  {
    title: 'UX/UI Design Principles',
    description:
      'Master the essential principles for creating user-friendly and visually appealing designs. This comprehensive guide covers user experience (UX) and user interface (UI) design, including usability testing and design thinking. Whether you are a designer or a developer, this book will enhance your skills in creating delightful and effective user interfaces. Connect with the author for additional design insights and guidance.',
    contact: 'author10@example.com'
  }
])

const user = useUserStore()

const isReportModalOpen = ref(false)
function openReportModal() {
  isReportModalOpen.value = true
}
function closeReportModal() {
  isReportModalOpen.value = false
}
</script>

<template>
  <header class="h-1/4 w-full">
    <EllipsisHorizontalCircleIcon
      v-if="user.roleId === 'customer'"
      class="h-8 absolute top-2 right-4 text-primary cursor-pointer"
      @click="openReportModal"
    />
    <VReportSmallModal
      :is-report-modal-open="isReportModalOpen"
      first-text="Reportar vendedor"
      second-text="Agregar a favoritos"
      @close-report-modal="closeReportModal"
      class="absolute top-8"
    />

    <img src="@/assets/images/gatoFime.jpg" alt="Gato" class="h-full w-full object-cover" />
  </header>
  <div class="h-3/4 py-8 px-16">
    <h1 class="text-3xl font-medium">Fimeño Vendedor</h1>
    <p class="text-sm mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione ipsam id
      mollitia ullam, nam dolores laudantium doloribus, ab fuga nemo dignissimos fugiat excepturi
      dolore, architecto perferendis ex reiciendis omnis! Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Quasi consequuntur quaerat nisi esse dicta magnam fuga reiciendis adipisci
      ea provident soluta ut, laudantium at praesentium maxime veniam mollitia cumque? Esse.
    </p>
    <h1 v-if="user.roleId === 'seller'" class="mt-8 text-xl font-medium">Tus publicaciones</h1>
    <div class="w-full flex flex-wrap mt-3">
      <VPublicationListItem
        v-for="(publi, key) in doomiePublis"
        :key="key"
        :title="publi.title"
        :description="publi.description"
        :contact="publi.contact"
      />
    </div>
  </div>
</template>
