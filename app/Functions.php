<?php

class Funcions
{
    public static function Title($route)
    {

        switch ($route) {
            case 'news-publish':
                return 'Admin - Publish News';
                break;

            case 'news-manage':
                return 'Admin - Manage News';
                break;

            case 'news-update':
                return 'Admin - Update News';
                break;

            case 'news-trash':
                return 'Admin - News Tash';
                break;

            case 'category-publish':
                return 'Admin - Add Category';
                break;
            case 'category-manage':
                return 'Admin - Manage Category';
                break;
            case 'category-update':
                return 'Admin - Update Category';
                break;
            case 'gallery':
                return 'Admin - Gallery';
                break;
            case 'gallery-add':
                return 'Admin - Add Gallery';
                break;
            case 'gallery-update':
                return 'Admin - Update Gallery';
                break;

            case 'video':
                return 'Admin - Videos';
                break;
            case 'video-add':
                return 'Admin - Add Video';
                break;
            case 'video-update':
                return 'Admin - Update Video';
                break;
            case 'files':
                return 'Admin - Filemanager';
                break;
            case 'profile':
                return 'Admin - Profile';
                break;

            case 'roles':
                return 'Admin - User & Roles';
                break;

            case 'roles-add':
                return 'Admin - Add User';
                break;

            case 'rosel-update':
                return 'Admin - Update User';
                break;

            case 'settings':
                return 'Admin - Settings';
                break;
            default:
                return 'Admin - Dashboard';
                break;
        }
    }
}
