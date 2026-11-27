
document.addEventListener('DOMContentLoaded', function() {
  const preElements = document.querySelectorAll('.code pre');

  preElements.forEach(pre => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '复制';
    copyBtn.title = '点击复制代码';

    copyBtn.style.position = 'absolute';
    copyBtn.style.right = '8px';
    copyBtn.style.top = '8px';
    copyBtn.style.padding = '4px 8px';
    copyBtn.style.background = '#f5f5f5';
    copyBtn.style.border = '1px solid #ddd';
    copyBtn.style.borderRadius = '4px';
    copyBtn.style.cursor = 'pointer';
    copyBtn.style.fontSize = '12px';
    copyBtn.style.transition = 'all 0.3s';

    copyBtn.addEventListener('mouseenter', () => {
      copyBtn.style.background = '#e0e0e0';
    });
    copyBtn.addEventListener('mouseleave', () => {
      copyBtn.style.background = '#f5f5f5';
    });

    copyBtn.addEventListener('click', () => {
      let code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      // 删除最后一行
      code = code.split('\n').slice(0, -1).join('\n');

      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = '已复制!';
        setTimeout(() => copyBtn.textContent = '复制', 2000);
      }).catch(err => {
        console.error('复制失败:', err);
        copyBtn.textContent = '复制失败';
        setTimeout(() => copyBtn.textContent = '复制', 2000);
      });
    });

    pre.style.position = 'relative';
    pre.style.paddingTop = '30px';
    pre.appendChild(copyBtn);
  });
});
