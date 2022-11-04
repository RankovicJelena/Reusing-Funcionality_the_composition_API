import { ref } from 'vue';

export default function useAlert(statringVisibility = false) {
  const alertIsVisible = ref(statringVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
