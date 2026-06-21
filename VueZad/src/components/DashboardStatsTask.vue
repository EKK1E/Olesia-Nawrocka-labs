<template>
  <section class="task">
    <h2>5.7 Dashboard statystyk grupy</h2>
    <DashboardStats :students="students" />
  </section>
</template>

<script>
const DashboardStats = {
  name: 'DashboardStats',
  props: {
    students: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalStudents() {
      return this.students.length;
    },
    activeStudents() {
      return this.students.filter((s) => s.aktywny).length;
    },
    groupCount() {
      const groups = this.students.map((s) => s.grupa);
      return [...new Set(groups)].length;
    },
    activityPercent() {
      if (!this.totalStudents) return 0;
      return Math.round((this.activeStudents / this.totalStudents) * 100);
    }
  },
  template: `
    <div class="dashboard card">
      <div class="stat">
        <span>Liczba uczniów</span>
        <strong>{{ totalStudents }}</strong>
      </div>
      <div class="stat">
        <span>Liczba aktywnych uczniów</span>
        <strong>{{ activeStudents }}</strong>
      </div>
      <div class="stat">
        <span>Liczba grup</span>
        <strong>{{ groupCount }}</strong>
      </div>
      <div class="stat">
        <span>Procent aktywności</span>
        <strong>{{ activityPercent }}%</strong>
      </div>
    </div>
  `
};

export default {
  name: 'DashboardStatsTask',
  components: { DashboardStats },
  data() {
    return {
      students: [
        { imie: 'Anna', nazwisko: 'Nowak', grupa: 'A', aktywny: true },
        { imie: 'Piotr', nazwisko: 'Kowal', grupa: 'A', aktywny: false },
        { imie: 'Ewa', nazwisko: 'Lis', grupa: 'B', aktywny: true },
        { imie: 'Marek', nazwisko: 'Zieliński', grupa: 'B', aktywny: true }
      ]
    };
  }
};
</script>
