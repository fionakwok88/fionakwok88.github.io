(() => {
  document.querySelectorAll('.research-detail').forEach(detail => {
    const children = [...detail.children];
    let current = null;
    for (const node of children) {
      if (node.tagName === 'H3') {
        current = document.createElement('details');
        current.className = 'research-accordion';
        const summary = document.createElement('summary');
        summary.textContent = node.textContent.trim();
        current.appendChild(summary);
        detail.insertBefore(current, node);
        node.remove();
      } else if (current) {
        current.appendChild(node);
      }
    }
  });
})();
