# bare-addon

Template repository for creating Bare native addons. For information on how to use the template, see [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Building

<https://github.com/holepunchto/bare-make> is used for compiling the native bindings in [`binding.c`](binding.c). Start by installing the tool globally:

```console
npm i -g bare-make
```

Next, generate the build system for compiling the bindings, optionally setting the `--debug` flag to enable debug symbols and assertions:

```console
bare-make generate [--debug]
```

This only has to be run once per repository checkout. When updating `bare-make` or your compiler toolchain it might also be necessary to regenerate the build system. To do so, run the command again with the `--no-cache` flag set to disregard the existing build system cache:

```console
bare-make generate [--debug] --no-cache
```

With a build system generated, the bindings can be compiled:

```console
bare-make build
```

This will compile the bindings and output the resulting shared library module to the `build/` directory. To install it into the `prebuilds/` directory where the Bare addon resolution algorithm expects to find it, do:

```console
bare-make install
```

To make iteration faster during development, the shared library module can also be linked into the `prebuilds/` directory rather than copied. To do so, set the `--link` flag:

```console
bare-make install --link
```

Prior to publishing the module, make sure that no links exist within the `prebuilds/` directory as these will not be included in the resulting package archive.

## Publishing

To publish an addon, make sure to first compile bindings for the targets you wish to support. The prebuild workflow defined in [`.github/workflows/prebuild.yml`](.github/workflows/prebuild.yml) automates this process for all targets supported by Bare itself. The whole process can be handily orchestrated by the [GitHub CLI](https://cli.github.com). To start the workflow, do:

```console
gh workflow run prebuild
```

To watch the status of the workflow run until it finishes, do:

```console
gh run watch
```

When finished, the resulting prebuilds can be downloaded to the `prebuilds/` directory by doing:

```console
gh run download --name prebuilds --dir prebuilds
```

## License

Apache-2.0
