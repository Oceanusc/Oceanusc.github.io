import { ref } from "vue";

export function useClipboard() {
  const copyStatus = ref("");

  async function copy(text: string) {
    copyStatus.value = "";
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.value = "已复制到剪贴板。";
    } catch {
      copyStatus.value = "无法访问剪贴板，请选中文字后手动复制。";
    }
  }

  return { copy, copyStatus };
}

export function downloadText(text: string, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
