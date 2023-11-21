<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import VPublicationListItem from '@/components/VPublicationListItem.vue'

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

const publicationsPerPage = 4
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(doomiePublis.value.length / publicationsPerPage))

const paginatedPublications = computed(() => {
  const startIndex = (currentPage.value - 1) * publicationsPerPage
  const endIndex = startIndex + publicationsPerPage
  return doomiePublis.value.slice(startIndex, endIndex)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  } else if (currentPage.value === totalPages.value) {
    currentPage.value = 1
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  } else if (currentPage.value === 1) {
    currentPage.value = totalPages.value
  }
}
</script>
<template>
  <div class="h-[45%] w-full flex publications-center justify-center flex-wrap overflow-y-auto">
    <ChevronLeftIcon
      @click="prevPage"
      class="w-10 stroke-primary stroke-2 cursor-pointer"
      :disabled="currentPage === 1"
    />
    <VPublicationListItem
      v-for="(publi, key) in paginatedPublications"
      :key="key"
      :title="publi.title"
      :description="publi.description"
      :contact="publi.contact"
    />
    <ChevronRightIcon
      @click="nextPage"
      class="w-10 stroke-primary stroke-2 cursor-pointer"
      :disabled="currentPage === totalPages"
    />
  </div>
</template>
