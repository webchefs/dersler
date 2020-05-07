<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9333c6f7ddeb0e1577ee623772ff5e00
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WebChefs\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WebChefs\\' => 
        array (
            0 => __DIR__ . '/../..' . '/webchefs/Dersler',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9333c6f7ddeb0e1577ee623772ff5e00::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9333c6f7ddeb0e1577ee623772ff5e00::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
