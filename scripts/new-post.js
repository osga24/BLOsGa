#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function getDate() {
    const now = new Date();
    return now.toISOString().split('T')[0]; // YYYY-MM-DD 格式
}

function createNewPost(title) {
    if (!title) {
        console.error('❌ 錯誤: 請提供文章標題');
        console.log('📝 使用方法: npm run new-post "文章標題"');
        console.log('📝 使用方法: node scripts/create-post.js "文章標題"');
        process.exit(1);
    }

    const folderName = title
        .toLowerCase()
        .replace(/\s+/g, '-')           
        .replace(/[^\w\-\u4e00-\u9fff]/g, '') 
        .replace(/--+/g, '-')         
        .replace(/^-|-$/g, '');        

    if (!folderName) {
        console.error('❌ 錯誤: 無法從標題生成有效的資料夾名稱');
        process.exit(1);
    }

    const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
    const postDir = path.join(blogDir, folderName);
    const indexFile = path.join(postDir, 'index.md');

    if (fs.existsSync(postDir)) {
        console.error(`❌ 錯誤: 文章資料夾 "${folderName}" 已存在`);
        process.exit(1);
    }

    const frontmatter = `---
title: ${title}
pubDate: ${getDate()}
description: ''
heroImage: 'hero.png'
tags: []
category: ''
---

`;

    try {
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        fs.mkdirSync(postDir, { recursive: true });
        
        fs.writeFileSync(indexFile, frontmatter, 'utf8');
        
        console.log('✅ 新文章創建成功!');
        console.log(`📂 路徑: ${postDir}`);
        console.log(`📄 文件: ${indexFile}`);
        console.log(`🌐 資料夾名稱: ${folderName}`);
        console.log('');
        console.log('📝 下一步:');
        console.log('1. 編輯 index.md 文件');
        console.log('2. 添加 heroImage (如果需要)');
        console.log('3. 設定 description、tags 和 category');
        console.log('4. 開始撰寫內容!');
        
    } catch (error) {
        console.error('❌ 創建文章時發生錯誤:', error.message);
        process.exit(1);
    }
}

const title = process.argv[2];
createNewPost(title);
