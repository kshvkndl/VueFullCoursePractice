import { onMounted, onUnmounted } from "vue";

export default function useWindowEvent() {
    onMounted(() => window.addEventListener("keydown", handleKeydown));

    onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

}